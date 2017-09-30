
import { Cmp6495Component } from './cmp';
describe('Cmp6495Component', () => {
  it('should add', () => {
    expect(new Cmp6495Component().add6495(1)).toBe(6496);
  });
});