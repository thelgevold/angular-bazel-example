
import { Cmp9000Component } from './cmp';
describe('Cmp9000Component', () => {
  it('should add', () => {
    expect(new Cmp9000Component().add9000(1)).toBe(9001);
  });
});