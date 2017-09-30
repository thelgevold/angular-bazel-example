
import { Cmp6670Component } from './cmp';
describe('Cmp6670Component', () => {
  it('should add', () => {
    expect(new Cmp6670Component().add6670(1)).toBe(6671);
  });
});