
import { Cmp5364Component } from './cmp';
describe('Cmp5364Component', () => {
  it('should add', () => {
    expect(new Cmp5364Component().add5364(1)).toBe(5365);
  });
});