
import { Cmp7505Component } from './cmp';
describe('Cmp7505Component', () => {
  it('should add', () => {
    expect(new Cmp7505Component().add7505(1)).toBe(7506);
  });
});