
import { Cmp6395Component } from './cmp';
describe('Cmp6395Component', () => {
  it('should add', () => {
    expect(new Cmp6395Component().add6395(1)).toBe(6396);
  });
});