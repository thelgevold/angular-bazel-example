
import { Cmp7337Component } from './cmp';
describe('Cmp7337Component', () => {
  it('should add', () => {
    expect(new Cmp7337Component().add7337(1)).toBe(7338);
  });
});