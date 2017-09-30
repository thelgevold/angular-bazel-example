
import { Cmp5098Component } from './cmp';
describe('Cmp5098Component', () => {
  it('should add', () => {
    expect(new Cmp5098Component().add5098(1)).toBe(5099);
  });
});