
import { Cmp7612Component } from './cmp';
describe('Cmp7612Component', () => {
  it('should add', () => {
    expect(new Cmp7612Component().add7612(1)).toBe(7613);
  });
});