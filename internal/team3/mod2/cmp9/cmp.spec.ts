
import { Cmp8329Component } from './cmp';
describe('Cmp8329Component', () => {
  it('should add', () => {
    expect(new Cmp8329Component().add8329(1)).toBe(8330);
  });
});