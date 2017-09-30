
import { Cmp6525Component } from './cmp';
describe('Cmp6525Component', () => {
  it('should add', () => {
    expect(new Cmp6525Component().add6525(1)).toBe(6526);
  });
});