import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signal-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() perPage!: number;
  @Input() totalPage!: number;
  @Input() page!: number;
  @Output() pageChange = new EventEmitter<number>();

  totalPages!: number;
  pagesArray!: number[];

  constructor() { }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalPage / this.perPage);
    this.pagesArray = this.getPagesArray();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page'] || changes['totalPage'] || changes['perPage']) {
      this.totalPages = Math.ceil(this.totalPage / this.perPage);
      this.pagesArray = this.getPagesArray();
    }
  }

  getPagesArray(): number[] {
    const pages = [];
    const maxPagesToShow = 5;
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, this.page - halfPagesToShow);
    let endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(page: number): void {
    this.page = page;
    this.pagesArray = this.getPagesArray();
    this.pageChange.emit(this.page); 
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.pagesArray = this.getPagesArray();
      this.pageChange.emit(this.page); 
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.pagesArray = this.getPagesArray();
      this.pageChange.emit(this.page); 
    }
  }

  shouldShowEllipsis(): boolean {
    return this.pagesArray[this.pagesArray.length - 1] < this.totalPages - 1;
  }

  shouldShowLastPage(): boolean {
    return this.pagesArray[this.pagesArray.length - 1] < this.totalPages;
  }
}
