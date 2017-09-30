
import { Cmp7764Component } from './cmp';
describe('Cmp7764Component', () => {
  it('should add', () => {
    expect(new Cmp7764Component().add7764(1)).toBe(7765);
  });
});