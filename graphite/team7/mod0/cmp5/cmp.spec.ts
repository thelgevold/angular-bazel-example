
import { Cmp6705Component } from './cmp';
describe('Cmp6705Component', () => {
  it('should add', () => {
    expect(new Cmp6705Component().add6705(1)).toBe(6706);
  });
});