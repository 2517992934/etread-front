import httpBook from '@/config/httpBook';

export function fetchChapterCatalog(bookId: number) {
    const fd = new FormData();
    fd.append('bookId', String(bookId));
    return httpBook.post('/book/chapter/catalog', fd);
}

export function fetchChapterContents(chapterIds: number[]) {
    const fd = new FormData();
    for (const id of chapterIds) fd.append('chapterIds', String(id));
    return httpBook.post('/book/chapter/contents', fd);
}