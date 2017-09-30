
import { Cmp6037Component } from './cmp';
describe('Cmp6037Component', () => {
  it('should add', () => {
    expect(new Cmp6037Component().add6037(1)).toBe(6038);
  });
});