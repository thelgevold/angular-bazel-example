
import { Cmp7179Component } from './cmp';
describe('Cmp7179Component', () => {
  it('should add', () => {
    expect(new Cmp7179Component().add7179(1)).toBe(7180);
  });
});