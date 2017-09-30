
import { Cmp4883Component } from './cmp';
describe('Cmp4883Component', () => {
  it('should add', () => {
    expect(new Cmp4883Component().add4883(1)).toBe(4884);
  });
});