
import { Cmp5387Component } from './cmp';
describe('Cmp5387Component', () => {
  it('should add', () => {
    expect(new Cmp5387Component().add5387(1)).toBe(5388);
  });
});