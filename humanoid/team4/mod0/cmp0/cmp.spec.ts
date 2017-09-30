
import { Cmp7400Component } from './cmp';
describe('Cmp7400Component', () => {
  it('should add', () => {
    expect(new Cmp7400Component().add7400(1)).toBe(7401);
  });
});