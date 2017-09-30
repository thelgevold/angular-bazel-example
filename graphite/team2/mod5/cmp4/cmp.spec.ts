
import { Cmp6254Component } from './cmp';
describe('Cmp6254Component', () => {
  it('should add', () => {
    expect(new Cmp6254Component().add6254(1)).toBe(6255);
  });
});