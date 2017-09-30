
import { Cmp6313Component } from './cmp';
describe('Cmp6313Component', () => {
  it('should add', () => {
    expect(new Cmp6313Component().add6313(1)).toBe(6314);
  });
});