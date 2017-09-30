
import { Cmp7570Component } from './cmp';
describe('Cmp7570Component', () => {
  it('should add', () => {
    expect(new Cmp7570Component().add7570(1)).toBe(7571);
  });
});