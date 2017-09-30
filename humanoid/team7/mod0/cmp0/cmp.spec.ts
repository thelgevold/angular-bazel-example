
import { Cmp7700Component } from './cmp';
describe('Cmp7700Component', () => {
  it('should add', () => {
    expect(new Cmp7700Component().add7700(1)).toBe(7701);
  });
});