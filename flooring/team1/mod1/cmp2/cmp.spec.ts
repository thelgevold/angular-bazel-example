
import { Cmp5112Component } from './cmp';
describe('Cmp5112Component', () => {
  it('should add', () => {
    expect(new Cmp5112Component().add5112(1)).toBe(5113);
  });
});