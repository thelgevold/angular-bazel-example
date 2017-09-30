
import { Cmp7530Component } from './cmp';
describe('Cmp7530Component', () => {
  it('should add', () => {
    expect(new Cmp7530Component().add7530(1)).toBe(7531);
  });
});