
import { Cmp9624Component } from './cmp';
describe('Cmp9624Component', () => {
  it('should add', () => {
    expect(new Cmp9624Component().add9624(1)).toBe(9625);
  });
});