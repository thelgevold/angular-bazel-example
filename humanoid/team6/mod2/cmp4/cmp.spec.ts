
import { Cmp7624Component } from './cmp';
describe('Cmp7624Component', () => {
  it('should add', () => {
    expect(new Cmp7624Component().add7624(1)).toBe(7625);
  });
});