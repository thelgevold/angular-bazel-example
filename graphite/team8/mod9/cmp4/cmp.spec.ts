
import { Cmp6894Component } from './cmp';
describe('Cmp6894Component', () => {
  it('should add', () => {
    expect(new Cmp6894Component().add6894(1)).toBe(6895);
  });
});