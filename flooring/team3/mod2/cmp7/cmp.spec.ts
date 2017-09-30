
import { Cmp5327Component } from './cmp';
describe('Cmp5327Component', () => {
  it('should add', () => {
    expect(new Cmp5327Component().add5327(1)).toBe(5328);
  });
});