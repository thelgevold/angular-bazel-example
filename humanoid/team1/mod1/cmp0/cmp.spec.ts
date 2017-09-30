
import { Cmp7110Component } from './cmp';
describe('Cmp7110Component', () => {
  it('should add', () => {
    expect(new Cmp7110Component().add7110(1)).toBe(7111);
  });
});