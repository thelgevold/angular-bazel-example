
import { Cmp4084Component } from './cmp';
describe('Cmp4084Component', () => {
  it('should add', () => {
    expect(new Cmp4084Component().add4084(1)).toBe(4085);
  });
});