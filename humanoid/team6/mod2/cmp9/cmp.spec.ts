
import { Cmp7629Component } from './cmp';
describe('Cmp7629Component', () => {
  it('should add', () => {
    expect(new Cmp7629Component().add7629(1)).toBe(7630);
  });
});