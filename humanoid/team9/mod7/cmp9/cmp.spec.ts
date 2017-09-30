
import { Cmp7979Component } from './cmp';
describe('Cmp7979Component', () => {
  it('should add', () => {
    expect(new Cmp7979Component().add7979(1)).toBe(7980);
  });
});