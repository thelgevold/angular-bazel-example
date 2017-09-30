
import { Cmp5437Component } from './cmp';
describe('Cmp5437Component', () => {
  it('should add', () => {
    expect(new Cmp5437Component().add5437(1)).toBe(5438);
  });
});