
import { Cmp6464Component } from './cmp';
describe('Cmp6464Component', () => {
  it('should add', () => {
    expect(new Cmp6464Component().add6464(1)).toBe(6465);
  });
});