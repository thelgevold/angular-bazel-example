
import { Cmp6772Component } from './cmp';
describe('Cmp6772Component', () => {
  it('should add', () => {
    expect(new Cmp6772Component().add6772(1)).toBe(6773);
  });
});