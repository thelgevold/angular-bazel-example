
import { Cmp7382Component } from './cmp';
describe('Cmp7382Component', () => {
  it('should add', () => {
    expect(new Cmp7382Component().add7382(1)).toBe(7383);
  });
});