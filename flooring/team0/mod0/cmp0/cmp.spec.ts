
import { Cmp5000Component } from './cmp';
describe('Cmp5000Component', () => {
  it('should add', () => {
    expect(new Cmp5000Component().add5000(1)).toBe(5001);
  });
});