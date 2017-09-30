
import { Cmp4000Component } from './cmp';
describe('Cmp4000Component', () => {
  it('should add', () => {
    expect(new Cmp4000Component().add4000(1)).toBe(4001);
  });
});