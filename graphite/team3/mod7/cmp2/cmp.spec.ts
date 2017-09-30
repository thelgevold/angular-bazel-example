
import { Cmp6372Component } from './cmp';
describe('Cmp6372Component', () => {
  it('should add', () => {
    expect(new Cmp6372Component().add6372(1)).toBe(6373);
  });
});