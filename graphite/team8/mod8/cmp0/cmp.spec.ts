
import { Cmp6880Component } from './cmp';
describe('Cmp6880Component', () => {
  it('should add', () => {
    expect(new Cmp6880Component().add6880(1)).toBe(6881);
  });
});