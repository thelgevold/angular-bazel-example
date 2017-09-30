
import { Cmp6164Component } from './cmp';
describe('Cmp6164Component', () => {
  it('should add', () => {
    expect(new Cmp6164Component().add6164(1)).toBe(6165);
  });
});