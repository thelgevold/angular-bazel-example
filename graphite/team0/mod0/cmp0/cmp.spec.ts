
import { Cmp6000Component } from './cmp';
describe('Cmp6000Component', () => {
  it('should add', () => {
    expect(new Cmp6000Component().add6000(1)).toBe(6001);
  });
});