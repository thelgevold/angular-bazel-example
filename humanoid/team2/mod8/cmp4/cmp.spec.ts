
import { Cmp7284Component } from './cmp';
describe('Cmp7284Component', () => {
  it('should add', () => {
    expect(new Cmp7284Component().add7284(1)).toBe(7285);
  });
});