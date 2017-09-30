
import { Cmp6971Component } from './cmp';
describe('Cmp6971Component', () => {
  it('should add', () => {
    expect(new Cmp6971Component().add6971(1)).toBe(6972);
  });
});