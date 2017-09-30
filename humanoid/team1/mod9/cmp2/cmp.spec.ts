
import { Cmp7192Component } from './cmp';
describe('Cmp7192Component', () => {
  it('should add', () => {
    expect(new Cmp7192Component().add7192(1)).toBe(7193);
  });
});