
import { Cmp6560Component } from './cmp';
describe('Cmp6560Component', () => {
  it('should add', () => {
    expect(new Cmp6560Component().add6560(1)).toBe(6561);
  });
});