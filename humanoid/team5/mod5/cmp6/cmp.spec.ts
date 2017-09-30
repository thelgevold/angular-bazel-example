
import { Cmp7556Component } from './cmp';
describe('Cmp7556Component', () => {
  it('should add', () => {
    expect(new Cmp7556Component().add7556(1)).toBe(7557);
  });
});