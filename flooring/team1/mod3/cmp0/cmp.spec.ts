
import { Cmp5130Component } from './cmp';
describe('Cmp5130Component', () => {
  it('should add', () => {
    expect(new Cmp5130Component().add5130(1)).toBe(5131);
  });
});