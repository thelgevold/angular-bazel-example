
import { Cmp5403Component } from './cmp';
describe('Cmp5403Component', () => {
  it('should add', () => {
    expect(new Cmp5403Component().add5403(1)).toBe(5404);
  });
});