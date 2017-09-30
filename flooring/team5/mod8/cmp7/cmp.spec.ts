
import { Cmp5587Component } from './cmp';
describe('Cmp5587Component', () => {
  it('should add', () => {
    expect(new Cmp5587Component().add5587(1)).toBe(5588);
  });
});