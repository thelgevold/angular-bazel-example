
import { Cmp5324Component } from './cmp';
describe('Cmp5324Component', () => {
  it('should add', () => {
    expect(new Cmp5324Component().add5324(1)).toBe(5325);
  });
});